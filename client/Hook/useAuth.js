

export const useAuth = () => {
    const token = localStorage.getItem('token');
    if(!token) return null;

    try {
        const decoded = jwt.decoded(token);
        return decoded;
    } catch (error) {
        console.log('Invalid token', error);
        return null;
    }
        
}