import React from "react";
import Subtitle from "app/components/common/typografy/subtitle";
import { CodeBlock, dracula } from "react-code-blocks";
import {
    oneToOneExample1Part1,
    oneToOneExample1Part2,
    oneToOneExample2Part1,
    oneToOneExample2Part2
} from "./examples";
import Title from "app/components/common/typografy/title";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Text from "app/components/common/typografy/text";

const OneToOnePage = () => {
    return (
        <>
            <Title>One-to-One</Title>
            <Text>Один к одному</Text>
            <SmallTitle>Зачем</SmallTitle>
            <Text>
                - Разделение ондной сущности на болеее используемые и менее
                используемые данные
            </Text>
            <Text>- Оптимизация чтения и обработки данных</Text>
            <Text>
                - Оптимизация объема памяти, необходимого для работы приложения
            </Text>

            <Subtitle>Пример 1. Адрес пользователя</Subtitle>
            <SmallTitle>1. Денормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample1Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />

            <SmallTitle>2. Нормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample1Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />

            <Subtitle>Пример 2. Данные о фильме</Subtitle>
            <SmallTitle>1. Денормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample2Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормализованные данные</SmallTitle>
            <CodeBlock
                text={oneToOneExample2Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
        </>
    );
};

export default OneToOnePage;
