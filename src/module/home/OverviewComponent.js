import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 10px;
    width: 100%;
    font-family : Montserrat;
`;
const BalanceBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    font-size : 18px;
    width: 100%;
    font-weight: bold;
    align-items : center;
`;
const AddTransaction = styled.button`
    background : black;
    color : white;
    padding : 5px 10px;
    border-radius : 5px;
    cursor : pointer;
    // width: 100%;
    font-weight : bold;
    text-align: center;
    font-size : 15px;
`;
const AddTransactionContainer = styled.div`
    disply: flex;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    gap: 10px;
    width: 100%;
    padding: 10px;
    margin: 10px 20px;
    & input{
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        width: 93%;
        border: 1px solid gray;
        margin: 10px 0px;
    }
`;
const RadioBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    flex-direction: row;
    width: 100%;
    align-items: center;
    & input{
        width: unset;
        margin: 0 10px;
    }
`;
const ExpenseContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12;
    margin: 20px;
`;
const ExpenseBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    padding: 15px 20px;
    width: 135px;
    & span{
        font-weight: bolder;
        font-size: 1.5rem;
        letter-spacing: 1px;
        color: ${(props) => (props.isIncome ? "green" : "red")};
    }
`


const AddTransactionView = (props) =>{

    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");
    const addTransaction = () =>{
        props.addTransaction({
            amount: Number(amount),
            desc,
            type,
            id: Date.now()
        });
        props.toggleAddTxn();
    };


    return (
        <AddTransactionContainer>
            <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /> <br />
            <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddTransaction style={{width: "100%"}} onClick={addTransaction}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    )
}

const OverviewComponent = (props) =>{

    const [isAddTxnVisible, toggleAddTxn] = useState(false); 

    return(
        <Container>
            <BalanceBox>
                Balance: {props.income - props.expense}
                <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}> {isAddTxnVisible ? "Cancel" : "Add"} </AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView toggleAddTxn= {toggleAddTxn} addTransaction = {props.addTransaction} /> }
            <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                    Expense<span>${props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income<span>${props.income}</span>
                </ExpenseBox>
            </ExpenseContainer>
        </Container>
    )
}

export default OverviewComponent;