"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
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

export const description = "A bar chart with a custom label";

const chartConfig = {
    neighborhood_total: {
        label: "Empréstimos",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

export function NeighborhoodChart({neighborhood} : {neighborhood: any}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Empréstimos por Bairro</CardTitle>
                <CardDescription>Número de pessoas listadas por bairro.</CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={neighborhood}
                        layout="vertical"
                        margin={{
                            right: 30,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="neighborhood_name"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value}
                            hide
                        />
                        <XAxis dataKey="neighborhood_total" type="number" hide />
                        <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="neighborhood_total"
                            layout="vertical"
                            fill="var(--chart-2)"
                            radius={4}
                        >
                            <LabelList
                                dataKey="neighborhood_name"
                                position="insideLeft"
                                offset={8}
                                className="fill-foreground"
                                fontSize={14}
                            />
                            <LabelList
                                dataKey="neighborhood_total"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
