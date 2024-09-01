import { Puff} from "react-loader-spinner";
const Loading = () => {
    return(
    <>
    <div className="flex  justify-center items-center ">
    <Puff
        color="#00BFFF"
        height={60}
        width={60}
      />
    </div>
    </>
    )
}
export default Loading;