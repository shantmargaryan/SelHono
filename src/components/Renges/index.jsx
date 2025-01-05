import styles from './ranges.module.scss'
import { Range, getTrackBackground } from "react-range"
import { useRenges } from "../../stores/Renges"

function Ranges() {
    const rtl = false
    const MIN = 0;
    const MAX = 100;
    const { values, setValues, secondValues, setSecondValues, thirdValues, setThirdValues } = useRenges()

    return (
        <>
            <span className={styles.position}>
                Project Design
            </span>
            <Range
                min={0}
                max={100}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div className={styles.track}
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values,
                                colors: ['#CDA274', '#F4F0EC'],
                                min: MIN,
                                max: MAX,
                                rtl,
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div className={styles.thumb}
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#CDA274",
                            outline: "none",
                            borderRadius: "50%",
                        }}>
                        <span className={styles.count}>
                            {values}
                        </span>
                    </div>
                )}
            />
            <span className={styles.position}>
                Team Management
            </span>
            <Range
                min={0}
                max={100}
                values={secondValues}
                onChange={(secondValues) => setSecondValues(secondValues)}
                renderTrack={({ props, children }) => (
                    <div className={styles.track}
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: secondValues,
                                colors: ['#CDA274', '#F4F0EC'],
                                min: MIN,
                                max: MAX,
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div className={styles.thumb}
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#CDA274",
                            outline: "none",
                            borderRadius: "50%",
                        }}
                    >
                        <span className={styles.count}>
                            {secondValues}
                        </span>
                    </div>
                )}
            />
            <span className={styles.position}>
                Client Satisfaction
            </span>
            <Range
                min={0}
                max={100}
                values={thirdValues}
                onChange={(thirdValues) => setThirdValues(thirdValues)}
                renderTrack={({ props, children }) => (
                    <div className={styles.track}
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: thirdValues,
                                colors: ['#CDA274', '#F4F0EC'],
                                min: MIN,
                                max: MAX,
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div className={styles.thumb}
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#CDA274",
                            outline: "none",
                            borderRadius: "50%",
                        }}
                    >
                        <span className={styles.count}>
                            {thirdValues}
                        </span>
                    </div>
                )}
            />
        </>
    )
}

export default Ranges