"use client";
import { MoedasI } from "@/utils/types/moeda";
import { useEffect, useState } from "react";
import Banner from "@/components/banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, TextIcon, Users } from "lucide-react";
import ChartOverview from "@/components/chart";
import Variation from "@/components/variations";

interface geralDadosI {
  clientes: number;
  carros: number;
  propostas: number;
}

export default function Home() {
  const [americanas, setAmericanas] = useState<MoedasI[]>([]);
  const [europeias, setEuropeias] = useState<MoedasI[]>([]);
  const [asiaticas, setAsiaticas] = useState<MoedasI[]>([]);

  useEffect(() => {
    async function getAmericanas() {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/BRL-USD,BRL-CAD,BRL-MXN,BRL-VEF,BRL-UYU,BRL-VEF,BRL-PEN,BRL-CLP,BRL-ARS,BRL-COP,BRL-BOB,BRL-PYG`);
      const dados = await response.json();
      setAmericanas(Object.values(dados));
    }
    getAmericanas();

    async function getEuropeias() {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/BRL-EUR,BRL-GBP,BRL-CHF,BRL-NOK,BRL-SEK,BRL-DKK,BRL-RUB`);
      const dados = await response.json();
      setEuropeias(Object.values(dados));
    }
    getEuropeias();

    async function getAsiaticas() {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/BRL-JPY,BRL-CNY,BRL-INR,BRL-KRW,BRL-THB,BRL-SGD,BRL-HKD`);
      const dados = await response.json();
      setAsiaticas(Object.values(dados));
    }
    getAsiaticas();
  }, []);

  const cardAmericanas = americanas.map((americana) => {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center ">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">1 {americana.name}</CardTitle>
            <DollarSign color="#006400" className="ml-auto w-4 h-4 " />
          </div>
          <CardContent>
            <h1 className="mt-3 text-base sm:text-lg font-bold">{`${Number(americana.bid).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}</h1>
          </CardContent>
        </CardHeader>
      </Card>
    );
  });

  const cardEuropeias = europeias.map((europeia) => {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center ">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">1 {europeia.name}</CardTitle>
            <DollarSign color="#006400" className="ml-auto w-4 h-4 " />
          </div>
          <CardContent>
            <h1 className="mt-3 text-base sm:text-lg font-bold">{`${Number(europeia.bid).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}</h1>
          </CardContent>
        </CardHeader>
      </Card>
    );
  });

  const cardAsiaticas = asiaticas.map((asiatica) => {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center ">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">1 {asiatica.name}</CardTitle>
            <DollarSign color="#006400" className="ml-auto w-4 h-4 " />
          </div>
          <CardContent>
            <h1 className="mt-3 text-base sm:text-lg font-bold">{`${Number(asiatica.bid).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}</h1>
          </CardContent>
        </CardHeader>
      </Card>
    );
  });

  return (
    <div className="sm:ml-14 p-4">
      <Banner />
      <h1 className="text-center mt-10 text-2xl font-bold text-gray-800">Principais Moedas do Continente Americano</h1>
      <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">{cardAmericanas}</section>
      <h1 className="text-center mt-10 text-2xl font-bold text-gray-800">Principais Moedas do Continente Europeu</h1>
      <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">{cardEuropeias}</section>
      <h1 className="text-center mt-10 text-2xl font-bold text-gray-800">Principais Moedas do Continente Asiáticos</h1>
      <section className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">{cardAsiaticas}</section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Variation />
      </section>
    </div>
  );
}
