import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

export default class HomePage extends React.Component {
    static async getInitialProps() {
        // let res = await fetch('Some Data From Server')
        // let jsonObj = await res.json()
        // return {jObj: jsonObj}
    }

    render() {
        return (
            <div>
                Hello Next+Koa
            </div>
        )
    }
}
