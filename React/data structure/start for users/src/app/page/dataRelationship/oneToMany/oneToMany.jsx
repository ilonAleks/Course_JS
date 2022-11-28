import Title from "app/components/common/typografy/title";
import Subtitle from "app/components/common/typografy/subtitle";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Text from "app/components/common/typografy/text";
import { CodeBlock, dracula } from "react-code-blocks";
import diagram from "app/assets/img/diagrams/One-To-Many.jpg";
import {
    adressesExampleDenormalized,
    adressesExampleNormalized,
    publisherExampleDenormalized,
    publisherExampleNormalizedByPublisher,
    publisherExampleNormalizedByBook
} from "./examples";
import React from "react";
const OneToManyPage = () => {
    return (
        <>
            <Title>One-to-Many</Title>
            <Text>Один ко многим</Text>
            <SmallTitle>Зачем</SmallTitle>
            <Text>- Увеличение производительности</Text>
            <Text>- Согласованность данных</Text>

            <Subtitle>Пример 1. Адреса</Subtitle>
            <SmallTitle>1. Денормализованные данные</SmallTitle>
            <CodeBlock
                text={adressesExampleDenormalized}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормализованные данные</SmallTitle>
            <CodeBlock
                text={adressesExampleNormalized}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <Subtitle>Пример 2. Издатель</Subtitle>
            <SmallTitle>1. Денормализованные данные</SmallTitle>
            <CodeBlock
                text={publisherExampleDenormalized}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормализованные данные по Издателю</SmallTitle>
            <CodeBlock
                text={publisherExampleNormalizedByPublisher}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>3. Нормализованные данные по Книге</SmallTitle>
            <CodeBlock
                text={publisherExampleNormalizedByBook}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>Плюсы данной структуры</SmallTitle>
            <Text>
                - Получение дочерних элементов без дополнительного запроса к БД
            </Text>
            <br />
            <img
                src={diagram}
                style={{
                    width: "100%",
                    borderRadius: "10px"
                }}
            />
        </>
    );
};

export default OneToManyPage;
