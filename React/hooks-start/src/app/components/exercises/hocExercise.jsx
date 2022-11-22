import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import CardWrapper from "../common/Card";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
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

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

const withFunctionals = (Component) => (props) => {
    const handleLogIn = () => {
        localStorage.setItem("auth", "key");
    };

    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };

    const isAuth = localStorage.getItem("auth");

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={handleLogIn}
                onLogOut={handleLogOut}
                {...props}
            />
        </CardWrapper>
    );
};
const ComponentWithHOC = withFunctionals(SimpleComponent);
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
                    Отображайте кнопку <code>Войти</code>, если пользователь НЕ
                    авторизован.
                </li>
                <li>
                    Отображает кнопку с содержанием{" "}
                    <code>Выйти из системы</code>, если пользователь
                    авторизован.
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
                    существующий HOC)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>, который является
                    результатом проверки наличия записи с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
                <li>
                    Передает параметр <code>onLogin</code> и{" "}
                    <code>onLogOut</code> для управления записью с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
            </ul>
            <ComponentWithHOC />
        </CollapseWrapper>
    );
};

export default HocExercise;
