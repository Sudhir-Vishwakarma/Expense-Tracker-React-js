import styled from "styled-components";

const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding: 10px 22px;
    font-size: 18px;
    width: 100%;
    gap: 10px;
    font-weight: bold;
    & input{
        padding: 10px 12px;
        border-radius: 12px;
        background: #e6e8e9;
        width: 100%;
        border: 1px solid #e6e8e9;
        outline: none;
    }    
`;
const Cell = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 10px 25px;
    width: 100%;
    letter-spacing: 1px;
    font-size: 15px;
    border-radius: 5px;
    font-weight: normal;
    border-left: 1px solid #e6e8e9;
    border-bottom: 1px solid #e6e8e9;
    border-top: 1px solid #e6e8e9;
    border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;


const TransactionCell = (props) =>{
    return(
        <Cell isExpense= {props.payload?.type === "EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span>{props.payload.amount}</span>
        </Cell>
    );
}

const TransactionComponent = (props) =>{
    return(
        <Container> Transactions
            <input type="search" placeholder="Search Transactions"/>
            {props.transactions?.length ? props.transactions.map((payload) => (
                <TransactionCell payload= {payload} />
            )):
         ""}
        </Container>
    )
}

export default TransactionComponent;