import { storePageNames } from "../../Data/storePageNames"

export default function Header () {
    return (
        <div className="row">
            {
                storePageNames.map(name => (
                    <div className="col-lg col-sm">
                        {name}
                    </div>
                ))
            }
        </div>
    )
}