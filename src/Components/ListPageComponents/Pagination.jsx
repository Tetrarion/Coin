export default function Pagination ({ coinsPerPage, totalCoins, pagination }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++){
        pageNumbers.push(i);
    }

    const selected = ( number, event ) => {
        pagination(number);
        let selected = document.querySelector('.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        event.currentTarget.classList.add('selected');
    };

    return (
        <div className="row justify-content-center mt-2">
            {
                pageNumbers.map(number => (
                    <div className="col-lg-auto col-sm-auto" key={number} onClick={(event) => selected(number, event)}>
                        <a href="#">
                            {number}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}