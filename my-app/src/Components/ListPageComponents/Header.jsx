import { listPageNames } from "../../Data/listPageNames";

export default function Header(){
    return (
        <div className="head">
            <div className="row">
            {
                listPageNames.map(name => (
                    <div className="col-lg col-sm text-center">
                        {name}
                    </div>
                ))
            }
            </div>
        </div>
    )
}