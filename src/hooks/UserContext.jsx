import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    // const [userInfo, setUserInfo] = useState({id: 1, name: 'Rodolfo'});
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('devburger:userData', JSON.stringify(userInfo)); // O strigify passa a informação de objeto para string.
    }

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:userData');
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburger:userData');

        if(userInfoLocalStorage){
            setUserInfo(JSON.parse(userInfoLocalStorage)); //Sempre que iniciar a aplicação vai deixar o etado atualizado.
        }
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>{children}</UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be a valid context');
    }

    return context;
}