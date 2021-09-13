import {Avatar,Divider} from 'antd'
import styles from '../styles/components/author.module.css'

const Author =()=>{
    return (
        <div className={styles["author-div"]}>
            <div> <Avatar size={100} src="https://static01.imgkr.com/temp/49e5abc53bc74c558c36d907245f8751.jpg"  /></div>
            <div className={styles["author-introduction"]}>
                Event is possible。
                <Divider></Divider>
                <Avatar size={28} className={styles["account"]}  />
                <Avatar size={28} className={styles["account"]}/>
                <Avatar size={28} className={styles["account"]}  />

            </div>
        </div>
    )

}

export default Author