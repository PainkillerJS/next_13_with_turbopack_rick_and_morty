const getData = async (characterId: string) => {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);

  return data.json();
};

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    throw new Error('fuck');
    // eslint-disable-next-line no-promise-executor-return
    return setTimeout(resolve, ms);
  });
};

interface CharasterPageProps {
  characterId: string;
}

const CharasterPage = async ({ params }: DynamicPage<CharasterPageProps>) => {
  const data = await getData(params.characterId);
  await sleep(2000);

  return <div>{data.name}</div>;
};

export default CharasterPage;
