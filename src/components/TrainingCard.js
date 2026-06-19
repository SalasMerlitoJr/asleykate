import React from "react";
import { FiExternalLink } from "react-icons/fi";

const TrainingCard = ({ t }) => {
	const CardInner = (
		<div className='training-card'>
			<div className='training-container'>
				<div className='top-training'>
					<div className='training-icon'>{t.icon}</div>
					{t.year && <span className='training-year'>{t.year}</span>}
				</div>
				<div className='mid-training'>
					<p className='training-title'>{t.title}</p>
					<p className='training-issuer'>{t.issuer}</p>
					<p className='training-desc'>{t.desc}</p>
				</div>
				{t.credentialUrl && (
					<div className='bottom-training'>
						<span className='training-link'>
							View Credential <FiExternalLink />
						</span>
					</div>
				)}
			</div>
		</div>
	);

	if (t.credentialUrl) {
		return (
			<a
				href={t.credentialUrl}
				target='_blank'
				rel='noreferrer'
				className='training-link-group'>
				{CardInner}
			</a>
		);
	}

	return CardInner;
};

export default TrainingCard;