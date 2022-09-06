import Head from "next/head";

interface IPageHead {
  title: string;
}

export const PageHead = ({title}: IPageHead) => (
  <Head>
    <title>D'Luxe | {title} </title>
    <link rel="icon" href="/favicon.svg" />
  </Head>
)