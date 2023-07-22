import { getUserAcrion } from "@app/actions/useraction";

interface Iprops {}
const Page = async () => {

    const user = await getUserAcrion();

  return <h1 className="">This is user home!</h1>;
};

export default Page;
