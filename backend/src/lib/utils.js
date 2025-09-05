import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: '7d'
    })

    res.cookie('jwt', token, {
        httpOnly: true, // prevents direct access from js, prevent XSS attacks
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // Use 'none' in production // CSRF protection
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        secure: process.env.NODE_ENV !== 'development' // only send cookie over https in production
    })

    return token;
}