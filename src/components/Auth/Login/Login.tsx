import React, {useState} from 'react';
import {Input, Password, PasswordChange, Submit, Label, Error} from "../Auth.styles";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {useLoginUserMutation} from "../../../store/market/market.api";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/state";
import {login} from "../../../store/slices/authSlice";


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [loginUser, {isLoading}] = useLoginUserMutation()
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('*Это обязательное поле').email('Введите корректный Email'),
        password: Yup.string().required('*Это обязательное поле')
    })
    const formOptions = { resolver: yupResolver(validationSchema) }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(formOptions)

    const onSubmit: SubmitHandler<any> = async (user:any) => {
        const {data}:any = await loginUser(user)
        if (!data) {
            return alert('Неверный логин или пароль')
        }
        if ('token' in data) {
            dispatch(login(data))
            navigate('/profile')
            window.localStorage.setItem('marketToken', data.token)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>
                <Input placeholder="Введите почту..." type="text" {...register('email')}/>
                {/*// @ts-ignore*/}
                {errors.email && <Error>{errors.email.message}</Error>}
            </Label>
            <Label>
                <Password>
                    <Input placeholder="Введите пароль..." type={isVisiblePassword ? "text": "password"} {...register('password')}/>
                    <PasswordChange onClick={() => setIsVisiblePassword(!isVisiblePassword)}>поменять</PasswordChange>
                </Password>
                {/*// @ts-ignore*/}
                {errors.password && <Error>{errors.password.message}</Error>}
            </Label>
            <Submit disabled={isLoading}>Войти</Submit>
        </form>
    );
};

export default Login;