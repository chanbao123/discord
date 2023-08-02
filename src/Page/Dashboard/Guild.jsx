import { useParams } from "react-router-dom";

function Guild() {
  let { id } = useParams();
  //   const [guild, setGuild] = useState();
  console.log(id);
  return <div>{id}</div>;
}

export default Guild;
