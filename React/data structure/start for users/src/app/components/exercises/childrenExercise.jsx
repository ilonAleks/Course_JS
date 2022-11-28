import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <SmallTitle>Решение</SmallTitle>

            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};
const ComponentsList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    console.log(arrayOfChildren);
    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            id: +child.key.replace(".", "") + 1
        })
    );
};
ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Component = ({ id }) => {
    console.log(id);
    return <div>{id} Компонент списка</div>;
};
Component.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default ChildrenExercise;
