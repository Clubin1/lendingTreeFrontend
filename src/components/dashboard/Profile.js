import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/profile.css'
class Profile extends React.Component {

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
        window.scrollTo(0, 0)

    }
    render() {
        const { user } = this.props.auth;
        console.log(user)
        let expImg
        if(user.levelExp <= 5) {
          expImg = <img alt="profileEXP"className="profileImage" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDU4IDYwIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9IjA5MS0tLVNlZWQiIGZpbGw9InJnYigwLDAsMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIj48cGF0aCBpZD0iU2hhcGUiIGQ9Im0yMy4xIDI5LjA4OGMwLS41NTIyODQ3LS40NDc3MTUzLTEtMS0xLTQuMDU4IDAtNy4zMzEuODgxLTkuNzI5IDIuNjE4LTcgNS4wNzItNy40IDE4LjA2LTcuMzUyIDIxLjkxOS4wMDY1NzE1OC41NDc1OTI4LjQ1MjM2NzguOTg4MDM5NCAxIC45ODhoLjAxMmMuMjY1NTcyMzMtLjAwMjg5ODguNTE5MDgyOTQtLjExMTMyMzguNzA0NjE3NDUtLjMwMTM2MDcuMTg1NTM0NTItLjE5MDAzNjguMjg3ODUxMDItLjQ0NjA3MzguMjg0MzgyNTUtLjcxMTYzOTMtLjAzMS0yLjU3NS4xNC0xNS42NTIgNi41MjUtMjAuMjc3IDIuMDUtMS40ODQgNC45MjktMi4yMzcgOC41NTYtMi4yMzcuNTUxMTE0Mi0uMDAwNTUuOTk3ODk4LS40NDY4ODY2Ljk5OS0uOTk4eiIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTI3LjYyNCA1MS43NjNjLTIuMDQ5IDEuNDg0LTQuOTI0IDIuMjM3LTguNTU1IDIuMjM3LS41NTIyODQ3IDAtMSAuNDQ3NzE1My0xIDFzLjQ0NzcxNTMgMSAxIDFjNC4wNTggMCA3LjMzMS0uODgxIDkuNzI4LTIuNjE4LjMwMDE2OTMtLjIwNTM2NTIuNDY1MTcyNy0uNTU3NTA5Ny40MzA4ODkyLS45MTk1ODg1LS4wMzQyODM1LS4zNjIwNzg5LS4yNjI0NDc4LS42NzY5OTYyLS41OTU4MjcyLS44MjIzNzM3LS4zMzMzNzk1LS4xNDUzNzc1LS43MTk0MDM3LS4wOTgyOTA3LTEuMDA4MDYyLjEyMjk2MjJ6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNTIuNDg3IDE3LjkxOGMuMDcyLTMuMzMxLS4zNzEtOS44MjUtNC40NjUtMTMuOC00LjQ2NC00LjM0Ni0xMS44MDctNC4yNjQtMTQuNzU3LTQuMDI4LTEuMjIxNDkuMDc1MTQwMzctMi4xODU1MDQ0IDEuMDY2ODcxMjQtMi4yMjYgMi4yOS0uMTU0IDIuOTU1LS4wMyAxMC4zIDQuNDM1IDE0LjYzOSAzLjU2NCAzLjQ2NCA4Ljk2NSA0LjExMSAxMi41IDQuMTExLjMxMyAwIC42MDYtLjAwNi44ODgtLjAxNS42NDgxNTg0IDEuMjI5NzI0NiAxLjE5MTQxODEgMi41MTE5MzggMS42MjQgMy44MzMuMTI0MjgzMy40MDQ0MDM1LjIwODM1NzMuODIwMDg0Mi4yNTEgMS4yNDEtLjc5NjI2MTYtLjE1MDUyMjQtMS41NTc1NTYyLS40NDc5MTktMi4yNDUtLjg3N2wtLjM4My0uMjM4Yy0uNTM1NjY3Ni0uMzU0OTMzMy0xLjA5OTE3MjQtLjY2NTk0NzktMS42ODUtLjkzLTQuMDE2NDA1NC0xLjgxMzIyNjgtOC43Mjc3MjU2LTEuMDQ5NzkyOS0xMS45NjYgMS45MzktLjE0MzE1NTMtLjUyNTE1ODYtLjMzMTE4MDUtMS4wMzcwNDIyLS41NjItMS41My0uMjY2MTQ3MS0uNDMzMzgwMi0uODE1MTgxNi0uNTk3OTczLTEuMjc1ODUxMS0uMzgyNDgyMS0uNDYwNjY5NC4yMTU0OTA5LS42ODYyMjU0Ljc0MjQyLS41MjQxNDg5IDEuMjI0NDgyMS02LjkzOC0xLjY4OS0xNS44MjYtMi40NDgtMjIuMDY4IDIuMDc2LTguMjY0IDUuOTgxLTkuMDY2IDE5LjU4NS05LjAyOCAyNS4xNTUuMDA5NDk5NjQgMi4xNDQ4MzExIDEuMzg1OTAyMDIgNC4wNDQ2NzY3IDMuNDIxIDQuNzIyIDQuNzE0OTEwMDYgMS42MzA4NDQ4IDkuNjU0MzU1NSAyLjUyMDA5MzQgMTQuNjQyIDIuNjM2IDQuMjU5IDAgOC42LS44NDQgMTIuMDg0LTMuMzY1IDYuNDgtNC43IDguMzM3LTE0LjA2OCA4LjgzMi0yMC4zMDYuMDY1LjA4LjEzMy4xNTcuMTg5LjI0Mi4zMDY1MTguNDU5NTAwOS45Mjc0OTkxLjU4MzUxOCAxLjM4Ny4yNzdzLjU4MzUxOC0uOTI3NDk5MS4yNzctMS4zODdjLS41Njg4Mjk0LS44MDE5ODI1LTEuMzIzNzU5My0xLjQ1Mzk2NzUtMi4yLTEuOS0uMDQ2NTExOS0uMDMzMjY4Mi0uMDk2MDY1OS0uMDYyMDYzLS4xNDgtLjA4Ni0uNDI5MjE1LS4yMjMwODI1LS44NzM2NTQ4LS40MTU1NjE3LTEuMzMtLjU3Ni4yODcxNzk0LS4xODQxNjc0LjU4NTAzNjQtLjM1MTEyNzYuODkyLS41Ljc0NDI4MzMtLjQwMDI3NTMgMS42MDA3NTk4LS41NDEwMjc0IDIuNDM0LS40LjY2NTA4OTMuMjA3NTEzMyAxLjI4MjgzMDMuNTQzOTA2OSAxLjgxOC45OS4yNDcuMTc3LjQ5My4zNTEuNzQzLjUxMy44NzUxNTMzLjU4MTcwMDIgMS44MTY4Njg0IDEuMDU2NDE4NiAyLjgwNSAxLjQxNCAxLjE2MTI5MTUuNDA5ODMyNiAyLjM4MjU1MjguNjI0MDc3MSAzLjYxNC42MzQgMi44MzQzNDA2LjA4MTUxMiA1LjUxNDgzMjItMS4yODY5NDQ5IDcuMTExMTU2Ny0zLjYzMDQyMDcgMS41OTYzMjQ2LTIuMzQzNDc1OCAxLjg4ODM5NTQtNS4zMzg4NzI5Ljc3NDg0MzMtNy45NDY1NzkzLTEuMTI0NjM1Ny0yLjY3NzgtMy4yMTY0NDYtNC44MzM4NzQ4LTUuODU5LTYuMDM5em0tMTUuNjE4LTIuMzMzYy0zLjg3OS0zLjc3Mi0zLjk2OS0xMC40MTgtMy44MzMtMTMuMTAyLS4wMDQ0MDgyLS4xMDU0NjAwMi4wMzQ3ODgyLS4yMDgwODQ2NS4xMDgzNzcxLS4yODM3NTQ0Ny4wNzM1ODktLjA3NTY2OTgzLjE3NTA4MS0uMTE3NzEyLjI4MDYyMjktLjExNjI0NTUzLjU2LS4wNDQgMS4yOTMtLjA4MyAyLjEzOS0uMDgzIDMuMiAwIDggLjU2NiAxMS4wNjQgMy41NDggMy4wMjMgMi45MzkgMy43NDQgNy42MTggMy44NSAxMC44MTMtMi44NjQ1MDgzLTQuNzk5MjAwMS03LjAyMzQ1MDUtOC42OTQwNDk0OS0xMi0xMS4yMzgtLjQ4NDkwNi0uMjY0NTQ0MzgtMS4wOTI0NTU2LS4wODU5MDU5OS0xLjM1Ny4zOTkwMDAwMXMtLjA4NTkwNiAxLjA5MjQ1NTU5LjM5OSAxLjM1Njk5OTk5YzguMDQxIDQuMzg3IDExLjA4NiA5LjgzNyAxMi4wODcgMTIuMi0yLjkxNi4xODItOS4wNjguMDc0LTEyLjczOC0zLjQ5NHptLTYuODk0IDM5LjQxNWMtNy41MjYgNS40NDktMTkuOTMxIDIuMTMyLTI0LjkxOS40NTEtMS4yMjQwNzA3Mi0uNDA1NzgtMi4wNTE4NjgyOC0xLjU0ODQzMDUtMi4wNTYtMi44MzgtLjAzNi01LjI2MS42ODktMTguMDg2IDguMi0yMy41MjMgNi4yNTMtNC41MjkgMTUuOTU4LTIuOTQ5IDIxLjU2Mi0xLjQ2MS4zMTQxODM3IDEuNjY4OTQwMi4wODUzMjg4IDMuMzk0NjM5Ni0uNjUzIDQuOTI0LS4xNTQ2MjMxLjMwOTQyNTYtLjEzODM1NTEuNjc2Nzg2OC4wNDMwMTQuOTcxMzMzNS4xODEzNjkxLjI5NDU0NjYuNTAyMDguNDc0NDQ1Mi44NDc5ODYuNDc1NjY2NSAxLjczMzkzODkuMDE5NTAyNiAzLjQ1MDExOTQuMzUxODMwNSA1LjA2Ni45ODEtLjMyNCA1LjgwMS0xLjgzNiAxNS40ODQtOC4wOTEgMjAuMDE5em0yNi40MjUtMjUuMDU4Yy0xLjIgMi41MzMtNC41IDQuNTctOC45IDMuMDY0LS44Mzc2NzEtLjMwNjMxMjctMS42MzU5NDI4LS43MTExNTU0LTIuMzc4LTEuMjA2LS4yMjQtLjE0NC0uNDQzLS4zLS42NjQtLjQ1OC0uNzUwODk0NS0uNjE0ODM1My0xLjYyMjI4MjEtMS4wNjU1MTc4LTIuNTU4LTEuMzIzLTEuMjY0MzIyMS0uMjM4MzQ0Ni0yLjU3MjA2NTEtLjA0NDYzMS0zLjcxMy41NS0uOTIyNDg2My40NTkwMzUyLTEuNzkwMjk2OSAxLjAyMDU3OTQtMi41ODcgMS42NzQtLjQxNi0uMDY4LS44MTQtLjEyNC0xLjE1Ny0uMTU4LjM2MzYyNzctMS4xNjk0MTg4LjUwNjA2MDgtMi4zOTYzNzg2LjQyLTMuNjE4IDIuOTgzLTMuMTggNy4xNDUtNC4xNyAxMC43NDYtMi40OTUuNDk4OTc4NC4yMjc4MjEuOTc4ODU0My40OTUzNDc3IDEuNDM1LjhsLjQuMjQ4Yy4xLjA2MyAyLjUzIDEuNTIyIDQuMDY0IDEuMDkyLjQzNjQ5MzQtLjExNTg1NzUuODAzNjk3NS0uNDEwNzgzIDEuMDExLS44MTIuMzA5NTU4Ny0uOTU2NDE1OC4yNjczNTc0LTEuOTkxOTQ1MS0uMTE5LTIuOTItLjM4MTcwOTYtMS4yMDk1OTM1LS44NjI2NzgxLTIuMzg1NTkxNS0xLjQzOC0zLjUxNi4yMTM3MDctLjA4NDIzOTQuNDEzODUxNy0uMTk5NDc0My41OTQtLjM0MmwuMDM4LS4wMzJjLjE5MTI2MzMtLjE1NjIwMzUuMzU2MDUwNi0uMzQyMjY0NS40ODgtLjU1MSAxLjk3OTczODQgMS4wMTY5NTc5IDMuNTM3Njc4NSAyLjY5OTE3OTEgNC40IDQuNzUxLjcxNDM2MjIgMS42ODM5MjkuNjg0NTgzOSAzLjU5MTE5MzItLjA4MiA1LjI1MnoiLz48L2c+PC9nPjwvc3ZnPg==" />
        } else if (user.levelExp <= 10) {
          expImg = <img alt="profileEXP"className="profileImage"src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDA5IDUxMi4wMDkiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjAwOSA1MTIuMDA5IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0zNzYuNTA1IDM5MS42MzRjLTguMDY3IDAtMTYuMDEyIDEuMjg2LTIzLjU2OSAzLjc4MS02Ljc3Ny0xNS44MjYtMTcuNDIxLTI5Ljk0Ny0zMC45NjUtNDAuODMyLTE0LjY5Ni0xMS44MTEtMzIuMzk1LTE5LjQxMS01MC45NjYtMjIuMDk2di0xMjIuMTQ4YzIxLjMwMi0xLjQxIDU5LjU4OC03Ljc4NCA4Ni4wMDYtMzQuMjAzIDM3LjU1Ni0zNy41NTcgMzQuNjE1LTk5LjEzMiAzNC40NzEtMTAxLjczNS0uNDIxLTcuNjM0LTYuNTE3LTEzLjczLTE0LjE1MS0xNC4xNTEtMi42MDEtLjE0NS02NC4xNzgtMy4wODUtMTAxLjczNCAzNC40NzEtMy45OTYgMy45OTYtNy41MjkgOC4yNjYtMTAuNjYxIDEyLjcwNS01LjUwMi0yMi4xMDktMTUuODQzLTQ2LjgxLTM1LjE3MS02Ni4xMzgtNDQuODYxLTQ0Ljg2LTExOC42ODEtNDEuMzMzLTEyMS44LTQxLjE2LTcuNjM0LjQyMS0xMy43MyA2LjUxNy0xNC4xNTEgMTQuMTUxLS4xNzIgMy4xMjEtMy43MDEgNzYuOTQgNDEuMTYgMTIxLjggMzIuODY1IDMyLjg2NSA4MS4yNjYgMzkuNzU4IDEwNi4wMyA0MS4wMjd2MTU1LjM3OWMtMTguNTcxIDIuNjg2LTM2LjI3IDEwLjI4NS01MC45NjYgMjIuMDk2LTEzLjU0NCAxMC44ODUtMjQuMTg4IDI1LjAwNi0zMC45NjUgNDAuODMyLTcuNTU3LTIuNDk1LTE1LjUwMi0zLjc4MS0yMy41NjktMy43ODEtNDEuNDkzIDAtNzUuMjUgMzMuNzU3LTc1LjI1IDc1LjI1djMwLjEyNWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDM2MS41YzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTMwLjEyNWMuMDAxLTQxLjQ5MS0zMy43NTYtNzUuMjQ4LTc1LjI0OS03NS4yNDh6bTQ1LjI1IDkwLjM3NWgtMzMxLjV2LTE1LjEyNWMwLTI0Ljk1MSAyMC4yOTktNDUuMjUgNDUuMjUtNDUuMjUgOC42NyAwIDE3LjEwMiAyLjQ3MSAyNC4zODUgNy4xNDUgNC4xMDIgMi42MzIgOS4yMjcgMy4xMDcgMTMuNzQzIDEuMjc1IDQuNTE2LTEuODMzIDcuODYtNS43NDYgOC45NjctMTAuNDkzIDcuOTg4LTM0LjI1MyAzOC4xNzMtNTguMTc3IDczLjQwNS01OC4xNzdzNjUuNDE3IDIzLjkyMyA3My40MDUgNTguMTc3YzEuMTA2IDQuNzQ3IDQuNDUxIDguNjYgOC45NjcgMTAuNDkzczkuNjQxIDEuMzU3IDEzLjc0My0xLjI3NWM3LjI4My00LjY3NCAxNS43MTUtNy4xNDUgMjQuMzg1LTcuMTQ1IDI0Ljk1MSAwIDQ1LjI1IDIwLjI5OSA0NS4yNSA0NS4yNXptLTIxMy4yMDItNDE5LjUwNmMyNC45MjIgMjQuOTIyIDMwLjgyNiA2My43IDMyLjEzNCA4NC41MzUtMjAuODA1LTEuMjY4LTU5LjQ1OC03LjEyNy04NC41LTMyLjE2OS0yNC45MjItMjQuOTIyLTMwLjgyNy02My43LTMyLjEzNS04NC41MzUgMjAuODA1IDEuMjY3IDU5LjQ1OSA3LjEyNyA4NC41MDEgMzIuMTY5em04OC4yNTcgNTMuNDMzYzE4LjU3NC0xOC41NzUgNDcuMDM5LTIzLjgzOCA2NC4yMTMtMjUuMjctMS40NzMgMTcuMjE3LTYuNzc0IDQ1LjgwNi0yNS4yMjYgNjQuMjU4LTE4LjU3NiAxOC41NzYtNDcuMDQgMjMuODM4LTY0LjIxNCAyNS4yNyAxLjQ3NC0xNy4yMTcgNi43NzUtNDUuODA2IDI1LjIyNy02NC4yNTh6Ii8+PC9nPjwvc3ZnPg==" />
        } else if (user.levelExp <= 15) {
          expImg = <img alt="profileEXP" className="profileImage" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzcuMDk0LDE2MC4xMDljMy45ODQtOS43NzgsNS45OTgtMjAuMTE4LDUuOTk4LTMwLjgzNWMwLTIuMTczLTAuMDg2LTQuMzY5LTAuMjU2LTYuNTI0DQoJCQljLTAuMzE2LTQuMDEyLTMuODI3LTcuMDA1LTcuODM2LTYuNjkyYy00LjAxMSwwLjMxNi03LjAwOCwzLjgyNC02LjY5Miw3LjgzNmMwLjEzOSwxLjc3NywwLjIxMSwzLjU4NywwLjIxMSw1LjM4DQoJCQljMCwxMC45MDQtMi41MzQsMjEuMzMyLTcuNTMyLDMwLjk5NGMtMC45MzQsMS44MDMtMS4wNzEsMy45MTQtMC4zODEsNS44MjRjMC42OSwxLjkxLDIuMTQ2LDMuNDQ1LDQuMDE2LDQuMjM1DQoJCQljMjguNDU0LDEyLjAyNyw0Ni44NCwzOS43NTcsNDYuODQsNzAuNjQ1YzAsNDEuMDY0LTMyLjEzMyw3NC42OC03My4xNTQsNzYuNTNjLTMuMTUzLDAuMTQyLTUuODU2LDIuMjk4LTYuNjk1LDUuMzQNCgkJCWMtNS40MywxOS42NjktMjcuMjQ2LDMzLjk0NS01MS44NzIsMzMuOTQ1Yy0xMS43MzQsMC0yMi45MjYtMy4xMjMtMzIuMTQ1LTguODg5bDI0LjA3NC0zNy45OQ0KCQkJYzEuNjg3LTIuNjYyLDIuNTUzLTUuNjEzLDIuNjQzLTguNTUzYzAuMTQ5LTQuOS0xLjg1OS05Ljc2OC01LjgyMS0xMy4yMTVjLTYuNzAzLTUuODMyLTE2Ljg0My01LjQ0Ny0yMy4wODYsMC44NzNsLTE4LjA2NSwxOC4yODkNCgkJCWw1Ljg5LTQzLjYzYzAuNjIyLTQuNjEzLTAuNzA5LTkuMzI2LTMuNjUyLTEyLjkzMWMtMi41NzUtMy4xNTUtNi4yMjgtNS4yNjktMTAuMjEyLTUuOTU5Yy0wLjU2OS0wLjA5OC0xLjE0NS0wLjE2OC0xLjcyNS0wLjIwNw0KCQkJbC02LjUwOC0wLjQ0Yy0zLjIzOC0wLjIyLTYuMzM1LDAuNDg1LTkuMDE5LDEuOWMtNC40NzQsMi4zNTgtNy44MDUsNi42OTItOC43NDIsMTIuMDE0bC01LjY5OCwzMi4zNzVsLTUuNjk4LDMyLjM3NA0KCQkJbC0zNS4xODItNDMuMjY3Yy0xLjE2Ny0xLjQzNS0yLjU0My0yLjYzOC00LjA1Ni0zLjU5MWMtMC4wMDktMC4wMDYtMC4wMTgtMC4wMTMtMC4wMjctMC4wMTljLTAuMTYzLTAuMTAyLTAuMzM0LTAuMTktMC41LTAuMjg3DQoJCQljLTIuMTY1LTEuMjU3LTQuNTc5LTIuMDMyLTcuMDYyLTIuMjUyYy0wLjA3OS0wLjAwNy0wLjE2LTAuMDA2LTAuMjM5LTAuMDEyYy0wLjM2Ni0wLjAyNy0wLjczMi0wLjA1LTEuMS0wLjA1NA0KCQkJYy0yLjI0Mi0wLjAyMi00LjUwNiwwLjQwMS02LjY1LDEuMzAzbC02Ljc5OSwyLjg1OGMtNC41MTUsMS44OTctNy45NzgsNS42NTUtOS41MDIsMTAuMzA5Yy0xLjUyNCw0LjY1NS0wLjk1Myw5LjczMywxLjU2NywxMy45MzQNCgkJCWwyOC43OTgsNDhjLTguNTksNC41ODgtMTguNjQ3LDcuMDY4LTI4Ljk1OCw3LjA2OGMtMjQuNjI3LDAtNDYuNDQyLTE0LjI3Ni01MS44NzItMzMuOTQ0Yy0wLjg0LTMuMDQzLTMuNTQzLTUuMTk4LTYuNjk1LTUuMzQNCgkJCWMtNDEuMDIxLTEuODUtNzMuMTU0LTM1LjQ2Ni03My4xNTQtNzYuNTMxYzAtMzAuODg5LDE4LjM4Ni01OC42MTksNDYuODQtNzAuNjQ1YzEuODctMC43OSwzLjMyNi0yLjMyNSw0LjAxNi00LjIzNQ0KCQkJYzAuNjktMS45MSwwLjU1Mi00LjAyMS0wLjM4MS01LjgyNGMtNC45OTgtOS42NjItNy41MzItMjAuMDktNy41MzItMzAuOTk0YzAtMzcuMjY1LDMwLjMxOC02Ny41ODMsNjcuNTgzLTY3LjU4Mw0KCQkJYzEwLjM4NywwLDIwLjM1OSwyLjMsMjkuNjM3LDYuODM2YzEuOTQzLDAuOTUxLDQuMjA5LDAuOTg4LDYuMTg0LDAuMTAyYzEuOTczLTAuODg2LDMuNDUyLTIuNjAzLDQuMDM0LTQuNjg3DQoJCQljOC4xMTgtMjkuMDY3LDM0Ljg4LTQ5LjM2OCw2NS4wNzktNDkuMzY4YzMwLjE5OSwwLDU2Ljk2MSwyMC4zMDEsNjUuMDc5LDQ5LjM2OGMwLjU4MywyLjA4NCwyLjA2MSwzLjgwMiw0LjAzNCw0LjY4Nw0KCQkJYzEuOTc0LDAuODg3LDQuMjQxLDAuODUsNi4xODQtMC4xMDJjOS4yNzgtNC41MzYsMTkuMjUtNi44MzYsMjkuNjM3LTYuODM2YzI0LjkxMSwwLDQ3LjczLDEzLjYzOSw1OS41NTEsMzUuNTk2DQoJCQljMS45MDcsMy41NDMsNi4zMjcsNC44NjksOS44NywyLjk2MWMzLjU0NC0xLjkwNyw0Ljg2OS02LjMyNywyLjk2MS05Ljg3Yy0xNC4zNjctMjYuNjg0LTQyLjEwMi00My4yNi03Mi4zODItNDMuMjYNCgkJCWMtOS44MzksMC0xOS4zNzMsMS42OTktMjguNDQ0LDUuMDYxQzMyMC4yOTMsMjEuMDgzLDI4OS45MzMsMCwyNTYuMDAxLDBjLTMzLjkzMSwwLTY0LjI5MiwyMS4wODMtNzYuNDksNTIuMTc5DQoJCQljLTkuMDcxLTMuMzYyLTE4LjYwNS01LjA2MS0yOC40NDQtNS4wNjFjLTQ1LjMwMiwwLTgyLjE1NywzNi44NTUtODIuMTU3LDgyLjE1NmMwLDEwLjcxNywyLjAxNCwyMS4wNTgsNS45OTgsMzAuODM1DQoJCQljLTI5Ljk2MiwxNS42NTMtNDguOTQsNDYuNjI3LTQ4Ljk0LDgwLjg2M2MwLDQ3LjE3OSwzNS42MzEsODYuMDk3LDgyLjAxOSw5MC43MjNjOS4xMiwyMy41OTUsMzQuNzUsMzkuNjY1LDY0LjI3NSwzOS42NjUNCgkJCWMxMi45NDQsMCwyNS42Mi0zLjIxNCwzNi40NTctOS4xNDJsMy42MTEsNi4wMThjNC45MjYsOC4yMTIsNi45NjUsMTcuOTM4LDUuNzQsMjcuMzg5Yy0xLjA2LDguMTcxLTIuMzY1LDE3Ljc5My00LjAyLDI3LjIxMQ0KCQkJYy0wLjY5NiwzLjk2NCwxLjk1Myw3Ljc0MSw1LjkxNiw4LjQzN2MzLjk2OSwwLjY5Nyw3Ljc0MS0xLjk1Myw4LjQzNy01LjkxNmMxLjcwNS05LjcwMywzLjAzOS0xOS41MjcsNC4xMTktMjcuODYNCgkJCWMxLjY0NS0xMi42OTEtMS4wODctMjUuNzQ2LTcuNjk1LTM2Ljc1OWwtMzkuOTA3LTY2LjUxN2MtMC40NzItMC43ODYtMC4zMzctMS41My0wLjIxNC0xLjkwNA0KCQkJYzAuMTIyLTAuMzc0LDAuNDU0LTEuMDUzLDEuMjk4LTEuNDA4bDYuOC0yLjg1OGMwLjkzNi0wLjM5NCwyLjA0LTAuMTE4LDIuNjgxLDAuNjcxbDM4LjgzNSw0Ny43Ng0KCQkJYzAuMTAzLDAuMTI2LDAuMjEyLDAuMjQ0LDAuMzE5LDAuMzY1YzEuNDQzLDEuNjQsMy4yMzgsMi44MTksNS4yMTEsMy40NjZjMi4wOTYsMC42ODgsNC4zODYsMC43NzgsNi42NTEsMC4yMDUNCgkJCWMwLjAyNS0wLjAwNiwwLjA1LTAuMDEsMC4wNzYtMC4wMTdjMCwwLDAsMCwwLjAwMSwwaDAuMDAxYzIuMjAxLTAuNTcyLDQuMTE1LTEuNzE0LDUuNjA0LTMuMjU5DQoJCQljMC4wNTgtMC4wNjEsMC4xMjEtMC4xMTgsMC4xNzgtMC4xNzljMC4wNTItMC4wNTcsMC4xLTAuMTE4LDAuMTUxLTAuMTc2YzEuNDI4LTEuNjExLDIuNDE4LTMuNjE1LDIuODEzLTUuODYybDEyLjM5OS03MC40NDkNCgkJCWMwLjIwNS0xLjE2NCwxLjI3NC0xLjk3NywyLjQyNi0xLjkwMWw2LjUwOSwwLjQ0YzAuODY3LDAuMDU5LDEuMzk0LDAuNTUzLDEuNjMsMC44NDNjMC4yMzYsMC4yODksMC42MTUsMC45MDMsMC40OTgsMS43NjYNCgkJCWwtNi45NDcsNTEuNDY5Yy0wLjA4NiwwLjYzNy0wLjEyLDEuMjcxLTAuMTA0LDEuODk4YzAuMTA4LDQuMzg5LDIuNjMyLDguNDIyLDYuNjY3LDEwLjQwNGMwLjI4OCwwLjE0MiwwLjU4LDAuMjcxLDAuODc1LDAuMzg3DQoJCQljMS40NzMsMC41ODQsMy4wMTksMC44NTgsNC41NSwwLjgzN2MzLjA2Mi0wLjA0Miw2LjA2Ny0xLjI2Myw4LjMyMy0zLjU0OGwyMy42MjItMjMuOTE2YzAuNDA4LTAuNDEzLDAuOTM5LTAuNjM2LDEuNDgxLTAuNjczDQoJCQljMC4wMjQtMC4wMDIsMC4wNDctMC4wMDgsMC4wNzEtMC4wMDljMC4wMTIsMCwwLjAyNCwwLjAwMiwwLjAzNiwwLjAwMmMwLjQxNC0wLjAwOSwwLjgzLDAuMDg5LDEuMjAxLDAuMzAyDQoJCQljMC4xMjcsMC4wNzMsMC4yNDksMC4xNTksMC4zNjQsMC4yNTljMC44NjUsMC43NTMsMS4wNDcsMi4wMDQsMC40MzQsMi45NzNsLTMyLjA3Nyw1MC42MTYNCgkJCWMtNi43MzcsMTAuNjMyLTkuODQ4LDIzLjQxNy04Ljc1OCwzNS45OTljMy4wNTIsMzUuMjQ5LDguMzQxLDc0Ljk5NCwzMS4zMjQsMTA4LjcwM0gyMDIuMTA1DQoJCQljOC4yMjQtMTIuMTk2LDE0LjYxNC0yNi4wNzEsMTkuMzkyLTQyLjA0M2MxLjE1My0zLjg1NS0xLjAzNy03LjkxNi00Ljg5My05LjA2OWMtMy44NTctMS4xNTMtNy45MTcsMS4wMzctOS4wNjksNC44OTMNCgkJCWMtNS44MjgsMTkuNDgyLTE0LjIyLDM1LjQzMy0yNS42NTcsNDguNzYxYy0xLjg1MywyLjE2LTIuMjc5LDUuMjAyLTEuMDksNy43ODhjMS4xODksMi41ODYsMy43NzQsNC4yNDMsNi42Miw0LjI0M2gxMzcuMTg1DQoJCQljMi44NDYsMCw1LjQzMi0xLjY1Nyw2LjYyLTQuMjQzYzEuMTg5LTIuNTg2LDAuNzYzLTUuNjI4LTEuMDktNy43ODdjLTI4LjA1OS0zMi43MDYtMzMuODUzLTc1LjIyMS0zNy4wODItMTEyLjUwMw0KCQkJYy0wLjgxNS05LjQyMSwxLjUxLTE4Ljk5LDYuNTQ5LTI2Ljk0MWwwLjIwNC0wLjMyM2MxMS41NDMsNy4yMzQsMjUuNDQ3LDExLjE1OCwzOS45NDQsMTEuMTU4DQoJCQljMjkuNTI1LDAsNTUuMTU1LTE2LjA3LDY0LjI3NS0zOS42NjZjNDYuMzg4LTQuNjI2LDgyLjAxOS00My41NDQsODIuMDE5LTkwLjcyMkM0ODYuMDM0LDIwNi43MzYsNDY3LjA1NiwxNzUuNzYyLDQzNy4wOTQsMTYwLjEwOQ0KCQkJeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
        }

        let pfp
        let dbURL = user.imageURL
        if(user.imageURL === ""){
          pfp = "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
        } else {
          pfp = dbURL
        }
          return (
          <div className="profileWrapper">
              <div className="userSection">
                <h4>View your profile, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
                <h4>Account Level: {user.levelExp}</h4>
                {expImg}
                <div className="userPfpCol">
                    <div className="userButton"></div>
                    <img 
                    alt="profileLogo"
                    src={pfp} className="userImage">
                    </img>
                </div>
                
              </div>
          </div>
        )
    }
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Profile);