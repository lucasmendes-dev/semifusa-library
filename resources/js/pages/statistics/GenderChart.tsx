"use client"
import { LabelList, Pie, PieChart } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

const chartConfig = {
    Masculino: {
        label: "Masculino",
    },
    Feminino: {
        label: "Feminino",
    },
    Outros: {
        label: "Outros",
    },
    NaoDeclarado: {
        label: "N/D",
    },
} satisfies ChartConfig;

export function GenderChart({gender} : {gender: any}) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Empréstimos por Gênero</CardTitle>
                <CardDescription>Número de pessoas listadas por gênero.</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="[&_.recharts-text]:fill-foreground mx-auto aspect-square max-h-[350px]"
                >
                <PieChart>
                    <ChartTooltip
                        content={<ChartTooltipContent nameKey="gender" hideLabel />}
                    />
                    <Pie data={gender} dataKey="total" nameKey="gender">
                    <LabelList
                        dataKey="gender"
                        className="fill-background"
                        stroke="none"
                        fontSize={14}
                        formatter={(value: keyof typeof chartConfig) =>
                            chartConfig[value]?.label
                        }
                    />
                    </Pie>
                </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
