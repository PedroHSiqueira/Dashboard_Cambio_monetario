"use client";
import { MoedasI } from "@/utils/types/moeda";
import { useEffect, useState } from "react";
import Banner from "@/components/banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign} from "lucide-react";
import ChartOverview from "@/components/chart";
import Variation from "@/components/variations";

export default function Home() {
  const [moedas, setMoedas] = useState<MoedasI[]>([]);

  useEffect(() => {
    async function getDados() {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/BRL-USD,BRL-CAD,BRL-MXN,BRL-VEF,BRL-UYU,BRL-VEF,BRL-PEN,BRL-CLP,BRL-ARS,BRL-COP,BRL-BOB,BRL-PYG`);
      const dados = await response.json();
      setMoedas(Object.values(dados));
      console.log(Object.values(dados));
    }
    getDados();
  }, []);

  const cardMoedas = moedas.map((moeda) => {
    return (
      <Card key={moeda.code}>
        <CardHeader>
          <div className="flex items-center justify-center ">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">1 {moeda.name}</CardTitle>
            <DollarSign color="#006400" className="ml-auto w-4 h-4 " />
          </div>
          <CardContent>
            <h1 className="mt-3 text-base sm:text-lg font-bold">{`${Number(moeda.bid).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}</h1>
          </CardContent>
        </CardHeader>
      </Card>
    );
  });

  return (
    <div className="sm:ml-14 p-4">
      <Banner />
      <h1 className="text-center mt-10 text-2xl font-bold text-gray-800">Principais Moedas do Continente Americano</h1>
      <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">{cardMoedas}</section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Variation />
      </section>
    </div>
  );
}
