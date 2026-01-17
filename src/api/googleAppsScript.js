import { API_ENDPOINTS } from "./endpoints";

function toUrlEncoded(payload) {
  const params = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    params.set(key, typeof value === "string" ? value : JSON.stringify(value));
  });

  return params;
}

/**
 * Sends a form submission to the SoulPoint Google Apps Script endpoint.
 * Uses `no-cors` + urlencoded for maximum compatibility with Apps Script deployments.
 */
export async function postLeadToGoogleAppsScript(payload) {
  const submittedAt = new Date().toISOString();
  const source = payload?.source ?? "website";

  // Many Apps Script handlers parse either:
  // - JSON.parse(e.parameter.data)
  // - or use e.parameter directly
  // So we send BOTH a `data` JSON blob and the flattened fields.
  const data = {
    ...payload,
    submittedAt,
    source,
  };

  const body = toUrlEncoded({
    ...data,
    data: JSON.stringify(data),
  });

  await fetch(API_ENDPOINTS.googleAppsScript, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body,
    keepalive: true,
  });
}

export function submitContactLead(values) {
  const name = values?.name ?? "";
  const email = values?.email ?? "";
  const phone = values?.phone ?? "";

  // Our form field is `notes`, Apps Script expects `message`.
  const message = values?.message ?? values?.notes ?? "";

  return postLeadToGoogleAppsScript({
    formType: "contact",
    name,
    email,
    phone,
    message,
    in_person: "false",
    when: "",
    location: "",
  });
}

export function submitMeetInPersonLead(values) {
  const name = values?.name ?? "";
  const email = values?.email ?? "";
  const phone = values?.phone ?? "";
  const when = values?.when ?? "";
  const where = values?.where ?? "";
  const address = values?.address ?? "";
  const message = values?.message ?? values?.notes ?? "";

  const location = address ? `${where ? `${where} - ` : ""}${address}` : where;

  return postLeadToGoogleAppsScript({
    formType: "meet_in_person",
    name,
    email,
    phone,
    message,
    in_person: "true",
    when,
    location,
    // Keep raw fields too, just in case you want them later.
    where,
    address,
  });
}
