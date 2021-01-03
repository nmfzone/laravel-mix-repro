import React, { Component } from 'react'
import styles from './landing.module.scss'

class LandingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className={styles.landing}>
                Landing Page
            </div>
        )
    }
}

export default LandingPage
