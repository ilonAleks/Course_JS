import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();

    const handelClick = () => {
        blockRef.current.children[0].innerText = "text";
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменисят содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary my-4" onClick={handelClick}>
                Trigger action
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
