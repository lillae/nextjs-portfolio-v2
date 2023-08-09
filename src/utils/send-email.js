export function sendEmail(data) {
	const apiEndpoint = "/api/email";

	fetch(apiEndpoint, {
		method: "POST",
		body: JSON.stringify(data),
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message");
		return res.json();
	});
}
