import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import { toNumber } from "lodash";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const FormComponent = ({ children }) => {
    const arrayChildren = React.Children.toArray(children);
    console.log(arrayChildren);
    return React.Children.map(arrayChildren, (child) => {
        return React.cloneElement(child, {
            ...child.props,
            id: toNumber(child.key.replace(".", "")) + 1
        });
    });
};

FormComponent.propTypes = {
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
