/** @format */

import React from "react";
import Button from "../button/Button";
import "./Item.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Items = ({
	title,
	desc,
	descLink,
	backgroundImg,
	leftBynTxt,
	leftBtnLink,
	rightBtnTxt,
	rightBtnLink,
	twoButtons,
	first,
}) => {
	return (
		<div className="item" style={{
      backgroundImage:`url(${backgroundImg})`
    }}>
			<div className="item__wrapper">
				<div className="item__text">
					<p>{title}</p>

					<div className="item_desc">
						<p>{desc}</p>
					</div>
				</div>

				<div className="item__lower">
					<div className="item__buttons">
						<Button imp="primary" text={leftBynTxt} link={leftBtnLink} />
						{twoButtons && (
							<Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
						)}
					</div>
					{first && (
						<div className="item__expand">
							<ExpandMoreIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Items;
