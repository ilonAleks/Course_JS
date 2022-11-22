import Collapse from "../components/common/collapse";
import React from "react";
import UseCallBackExample from "../components/examples/useCallback/useCallBackExample.jsx";
import BlockQuoteWrapper from "../components/common/blockQuote";
import CardWrapper from "../components/common/Card";
import Divider from "../components/common/divider";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";

const UseCalbackExample = () => {
    return (
        <>
            <Title>useCallback</Title>

            <Collapse title="Информация">
                <BlockQuoteWrapper>
                    <p>
                        Аргументы: callBack , [array of dependencies]
                        <br />
                        Возвращает: Закэшированное значение выполненной функции,
                        которое обновляется только при изменении зависимостей.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                    <p>
                        С помощью него можно предотвращать ненужные рендендеры
                        дочерних компонентов, которым мы передаем callback
                        функцию.
                    </p>
                </BlockQuoteWrapper>
            </Collapse>

            <CardWrapper>
                <i className="bi bi-lightbulb"></i>{" "}
                <code>useCallback(fn, deps)</code> ~{" "}
                <code>useMemo(() =&gt; fn, deps)</code>
                <p>
                    useCallback хранит целую функцию внутри, а useMemo -
                    результат функции
                </p>
            </CardWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <UseCallBackExample />
        </>
    );
};

export default UseCalbackExample;
