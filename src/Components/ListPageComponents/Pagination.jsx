export default function Pagination ({ coinsPerPage, totalCoins, pagination }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="row justify-content-center mt-2">
            {
                pageNumbers.map(number => (
                    <div className="col-lg-auto col-sm-auto" key={number} onClick={() => pagination(number)}>
                        <a href="#">
                            {number}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}