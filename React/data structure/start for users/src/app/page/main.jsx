import * as React from "react";
import Title from "app/components/common/typografy/title";
import Subtitle from "app/components/common/typografy/subtitle";
import Text from "app/components/common/typografy/text";
import { CodeBlock, dracula } from "react-code-blocks";
import { example1Part1, example1Part2 } from "./codeExamples";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import diagram1 from "app/assets/img/diagrams/DeNormalized.jpg";
import diagram2 from "app/assets/img/diagrams/Normalized.jpg";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Divider from "app/components/common/divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(name, norm, denorm) {
    return { name, norm, denorm };
}

const rows = [
    createData(
        "Объем данных",
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        "Скорость получения данных",
        <KeyboardArrowDownIcon style={{ color: "red" }} />,
        <KeyboardArrowUpIcon style={{ color: "green" }} />
    ),
    createData(
        "Несогласованность данных",
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        "Простота запроса",

        <KeyboardArrowDownIcon style={{ color: "red" }} />,
        <KeyboardArrowUpIcon style={{ color: "green" }} />
    ),
    createData(
        "Затраты на Update/Put",
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        <>
            Сложность кода для <br /> работы со схемой
        </>,
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        "Целостность данных",
        <KeyboardArrowDownIcon style={{ color: "red" }} />,
        <KeyboardArrowUpIcon style={{ color: "green" }} />
    )
];
const Main = () => {
    return (
        <>
            <Title>Структуры данных</Title>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Избыточность данных</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Избыточность данных - это условие, создаваемое в базе
                        данных или технологии хранения данных, при которой один
                        и тот же фрагмент данных хранится в двух разных местах.
                        <br />
                        Это может означать два разных поля в одной базе данных
                        или два разных места в нескольких программных средах или
                        платформах. Всякий раз, когда данные повторяются, это
                        представляет собой избыточность данных.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Согласованность данных</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Согласованность данных означает, совпадают ли одни и те
                        же данные, хранящиеся в разных местах.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider />
            <Subtitle>Денормализация</Subtitle>
            <Text>
                Денормализация - это метод, который используется при
                проектировании в базе данных. Он используется для добавления
                избыточности для быстрого выполнения запроса. Это метод, при
                котором данные объединяются.
            </Text>

            <SmallTitle>Характеристики</SmallTitle>
            <Stack
                direction="row"
                spacing={1}
                style={{ margin: "10px 0 20px" }}
            >
                <Chip
                    label="Скорость обработки запроса"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "green" }} />}
                />
                <Chip
                    label="Количество сущностей"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "green" }} />}
                />
                <Chip
                    label="Избыточность данных"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "red" }} />}
                />
                <Chip
                    label="Согласованность данных"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "red" }} />}
                />
            </Stack>
            <SmallTitle>Пример</SmallTitle>
            <CodeBlock
                text={example1Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>Логика процесса запроса данных</SmallTitle>
            <img
                src={diagram1}
                style={{
                    width: "100%",
                    borderRadius: "10px"
                }}
            />
            <Divider />
            <Subtitle>Нормализация</Subtitle>
            <Text>
                Нормализация - это метод, используемый в базе данных для
                уменьшения избыточности и несогласованности данных. Это метод,
                при котором данные без избыточности и непротиворечивости
                хранятся в установленной схеме.
            </Text>
            <SmallTitle>Характеристики</SmallTitle>
            <Stack
                direction="row"
                spacing={1}
                style={{ margin: "10px 0 20px" }}
            >
                <Chip
                    label="Скорость обработки запроса"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "red" }} />}
                />
                <Chip
                    label="Количество сущностей"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "red" }} />}
                />
                <Chip
                    label="Избыточность данных"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "green" }} />}
                />
                <Chip
                    label="Согласованность данных"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "green" }} />}
                />
            </Stack>
            <SmallTitle>Пример</SmallTitle>
            <CodeBlock
                text={example1Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>Логика процесса запроса данных</SmallTitle>
            <img
                src={diagram2}
                style={{
                    width: "100%",
                    borderRadius: "10px"
                }}
            />
            <Divider />
            <Subtitle>Сравнение</Subtitle>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Параметр</TableCell>
                            <TableCell align="center">Normalization</TableCell>
                            <TableCell align="center">
                                Denormalization
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.norm}</TableCell>
                                <TableCell align="center">
                                    {row.denorm}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Main;
