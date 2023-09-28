import { CatEntry } from "./CatEntry";

//function def
const CatList = (props) => {
    // console.log(props);
    return (
        <ul>
            {
                props.catNames.map(
                    function(name, index) {
                        return <CatEntry name={name} key={index} index={index} />
                    }
                )
            }
        </ul>
    )

}

//export
export { CatList };


