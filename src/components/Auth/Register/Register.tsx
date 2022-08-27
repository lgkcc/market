import React, {useState} from 'react';
import {Input, Password, PasswordChange, Submit, Label, Error} from "../Auth.styles";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/state";
import {useAddNewUserMutation} from "../../../store/market/market.api";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {login} from "../../../store/slices/authSlice";

const Register = () => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [loginUser, {isLoading}] = useAddNewUserMutation()
    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Это обязательное поле')
            .min(3, 'Минимальная длинна username 3 символа')
            .max(20, 'Максимальная длинна username 20 символов'),
        email: Yup.string()
            .required('Это обязательное поле')
            .email('Введите корректный Email'),
        password: Yup.string()
            .required('Это обязательное поле')
            .min(6, 'Минимальная длинна пароля 6 символов')
            .max(40, 'Максимальная длинна пароля 40 символов'),
        repeatPassword: Yup.string()
            .required('Это обязательное поле')
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
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
                <Input placeholder="Введите логин..." type="text" {...register('fullName')}/>
                {/*// @ts-ignore*/}
                {errors.fullName && <Error>{errors.fullName.message}</Error>}
            </Label>
            <Label>
                <Input placeholder="Введите почту..." type="email" {...register('email')}/>
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
            <Label>
                <Password>
                    <Input placeholder="Повторите пароль..." type={isVisibleRepeatPassword ? "text": "password"} {...register('repeatPassword')}/>
                    <PasswordChange onClick={() => setIsVisibleRepeatPassword(!isVisibleRepeatPassword)}>поменять</PasswordChange>
                </Password>
                {/*// @ts-ignore*/}
                {errors.repeatPassword && <Error>{errors.repeatPassword.message}</Error>}
            </Label>
            <Submit disabled={isLoading}>Войти</Submit>
        </form>
    );
};

export default Register;