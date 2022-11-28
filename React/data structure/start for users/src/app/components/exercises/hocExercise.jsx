import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import CardWrapper from "../common/Card";

// Simple Component
const SimlpeComponent = ({ onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-secondary" onClick={onLogOut}>
            Выйти из системы
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogin}>
            Войти
        </button>
    );
};

SimlpeComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

// HOC Component
const withFunctionals = (Component) => (props) => {
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogout = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = localStorage.getItem("auth");

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogOut={handleLogout}
                onLogin={handleLogin}
                {...props}
            />
        </CardWrapper>
    );
};
// Component with HOC
const ComponentWithHoc = withFunctionals(SimlpeComponent);

const HocExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{" "}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    Имеет параметры:<code>onLogin</code>, <code>onLogOut</code>,{" "}
                    <code>isAuth</code>
                </li>
                <li>
                    Отображате кноку <code>Войти</code>, если пользователь НЕ
                    авторизован
                </li>
                <li>
                    Отображает кнопку с содержанием{" "}
                    <code>Выйти из системы</code>, если пользователь авторизован
                </li>
                <li>
                    При нажатии на кнопки вызываются методы <code>onLogin</code>{" "}
                    и <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо <code>HOC</code>, который модицифицует компонент{" "}
                <code>SimpleComponent</code> следующим образом:
            </p>
            <ul>
                <li>
                    Добавляет обертку в виде карточки boostrap (использовать
                    существующией HOC)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>, который является
                    резльтатом проверки наличия записи с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
                <li>
                    Передает параметр <code>onLogin</code> и{" "}
                    <code>onLogOut</code> для управления записью с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
            </ul>
            <Divider />
            <SmallTitle>Решение</SmallTitle>
            <ComponentWithHoc />
        </CollapseWrapper>
    );
};

export default HocExercise;
