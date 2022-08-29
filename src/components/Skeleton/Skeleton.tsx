import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width="100%"
        viewBox="0 0 300 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="8" ry="8" width="300" height="250" />
    </ContentLoader>
)

export default Skeleton