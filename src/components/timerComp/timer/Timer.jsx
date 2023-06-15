import React, { useState, useRef, useEffect } from 'react'
import './Timer.scss'

const Timer = () => {
	const Ref = useRef(null);

	const [timer, setTimer] = useState('00:24:00');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			setTimer(
				(hours > 24 ? hours : '0' + hours) + ':' +
				(minutes > 24 ? minutes : '' + minutes) + ':'
				+ (seconds > 24 ? seconds : '' + seconds)
			)
		}
	}

	const clearTimer = (e) => {

		setTimer('00:24:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setMinutes(deadline.getMinutes() + 24);
		return deadline;
	}

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	return (
		<div className="timer">
			<span>{timer}</span>
		</div>
	)
}

export default Timer;
