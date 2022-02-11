export default function Pagination(prop){

    return (
        <div className="scroll">
            <div className="row mt-4 justify-content-center" onClick={prop.click}>
                <div className="col-lg-auto">
                    1
                </div>
                <div className="col-lg-auto">
                    2
                </div>
                <div className="col-lg-auto">
                    3
                </div>
                <div className="col-lg-auto">
                    4
                </div>
                <div className="col-lg-auto">
                    5
                </div>
                <div className="col-lg-auto">
                    6
                </div>
                <div className="col-lg-auto">
                    7
                </div>
                <div className="col-lg-auto">
                    8
                </div>
                <div className="col-lg-auto">
                    9
                </div>
                <div className="col-lg-auto">
                    10
                </div>
            </div>
        </div>
    )
}