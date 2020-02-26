import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

/*
const publicAlerts = [
	{ alertType: "Weather", location: "Colorado", text: "Winter Storm Warning issued for Rocky Mountain Range. Issuer: National Weather Service"},
	{ alertType: "Weather", location: "Oregon", text: "Usual winds in the region and local dangers can be expected (e.g. mistral, summer storm, rising waters, strong waves submerging the coastline)"},
	{ alertType: "Fire", location: "Texs, Southern", text: "Extreme Fire Watch. Very dry and gusty conditions expected for all of Deep South Texas"},
	{ alertType: "Advisory", location: "Florida, Central", text: "HIGH RIP CURRENT RISK IN EFFECT FROM 7 AM EST THIS MORNING"},
	{ alertType: "Advisory", location: "California, Los Angeles", text: "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 9 AM PST TUESDAY"},
	{ alertType: "Weather", location: "Oklahoma, Missouri", text: "Tornado advisory through Thursday. Shelter in fortified sub-basement."}
];
*/

const publicAlerts = [
	{ alertType: "Weather", location: "Colorado", text: "Winter Storm Warning issued for Rocky Mountain Range. Issuer: National Weather Service"},
	{ alertType: "Weather", location: "Oregon", text: "Usual winds in the region and local dangers can be expected (e.g. mistral, summer storm, rising waters, strong waves submerging the coastline)"},
	{ alertType: "Fire", location: "Texs, Southern", text: "Extreme Fire Watch. Very dry and gusty conditions expected for all of Deep South Texas"}
];

const view = ({properties}, {updateState}) => {
	console.log(properties.alerts);
	return (
		<div>
			<p className="alertsHeader">Public alerts</p>
			<div className="alerts">
				{properties.alerts.map(item => (
					<div className="alert">
						<p className="location">{item.location}</p>
						<p className="text">{item.text}</p>
						<p className="type">{item.alertType}</p>
					</div>
				))}
			</div>
		</div>
	);
};

createCustomElement('cmp-public-alerts', {
	renderer: {type: snabbdom},
	view,
	properties: {
		alerts: {default: publicAlerts}
	},
	initialState: {
		alerts: publicAlerts
	},
	styles: styles
});
