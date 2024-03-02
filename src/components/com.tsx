
import classes from "./Style.module.scss"
export function Com() {
    return (
        <div className={classes.block}>
            <h1 className={classes.first}>первый</h1>
            <h2 className={classes.second}>второй</h2>
        </div>
    )
}