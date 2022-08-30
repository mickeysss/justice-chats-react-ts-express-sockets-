import styled from 'styled-components'

export const ChatContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to right, #102650, #5e3017);

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 2rem;
    }

    .form-control {
        border-radius: 10px;
        width: 700px;
        padding: 10px;
    }

    input {
        padding: 0.5rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: black;
        font-size: 1rem;
        width: 100%;

        &:focus {
            border: 0.1rem solid #997af0;
            outline: none;
        }
    }

    button {
        color: white;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;

        &:hover {
            color: white;
            background-color: #ffbb0e;
        }
    }

    span {
        a {
            text-decoration: none;
            font-weight: bold;
        }
    }

    li {
        list-style: none;
    }

    .messages {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        white-space: break-spaces;
        height: 500px;
        margin-bottom: 30px;
        border-radius: 10px;
        padding: 20px;
        background: rgba(5, 9, 14, 0.14);
    }

    .message-me,
    .message-other {
        border-radius: 20px;
        margin-bottom: 30px;
        padding: 5px 25px;
        width: fit-content;
        word-break: break-all;
        color: white;
    }

    .message-me,
    .message-other span {
        text-align: end;
    }

    .message-me {
        background: #8c70fc;
        align-self: flex-end;
        color: white;
    }

    .message-other {
        background: white;
        align-self: flex-start;
        color: black;
    }

    .messageUser {
        font-weight: 900;
    }

    .flex-container {
        max-width: 734px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flex-container svg {
        margin-left: 20px;
        transform: scale(1.5, 1.5);
        fill: #e0c7c7;
    }

    .room-title {
        font-size: 36px;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
            Courier, monospace;
    }

    .btn-delete {
        background: transparent;
        width: 200px;
    }

    .btn-delete:hover {
        background: red;
    }

    .messages::-webkit-scrollbar {
        width: 20px;
    }

    .messages::-webkit-scrollbar-track {
        background-color: transparent;
    }

    .messages::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
    }

    .messages::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 20px;
    }

    .messages::-webkit-scrollbar-thumb {
        background: linear-gradient(to right, #ff7e5f, #feb47b);
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    .messages::-webkit-scrollbar-thumb:hover {
        background-color: #a8bbbf;
    }

    .collapse-container {
        align-items: center;
        max-width: 200px;
        width: 100%;
        position: absolute;
        right: 0;
    }
  .collapse-panel {
    background: lightblue;
  }
  .online-icon{
    width: 5px;
    height: 5px;
    background: green;,
    display: inline-block,
    borderRadius: 50%,
  }
`