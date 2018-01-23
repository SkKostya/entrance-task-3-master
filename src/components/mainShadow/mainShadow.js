import React from "react";

import { Time } from "../../util/helpers.js";

var clock = Time();

const Shadow = () => {
	return (
		<div className="main__shadow">
			<ul className="main__date">
				<li id="date" className="main__days">{clock}</li>
				<li className="main__time">8:00</li>
				<li className="main__time">9</li>
				<li className="main__time">10</li>
				<li className="main__time">11</li>
				<li className="main__time">12</li>
				<li className="main__time">13</li>
				<li className="main__time">14</li>
				<li className="main__time">15</li>
				<li className="main__time">16</li>
				<li className="main__time">17</li>
				<li className="main__time">18</li>
				<li className="main__time">19</li>
				<li className="main__time">20</li>
				<li className="main__time">21</li>
				<li className="main__time">22</li>
				<li className="main__time">23</li>
			</ul>
		</div>
	);
};

export default Shadow;