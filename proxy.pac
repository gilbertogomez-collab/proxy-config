function FindProxyForURL(url, host) {

    // Impresora
    if (host == "10.10.20.10") {
        return "DIRECT";
    }

    // Red local
    if (isPlainHostName(host) ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*")) {
        return "DIRECT";
    }

    // Solo Outlook + autenticación + adjuntos
    if (
        shExpMatch(host, "*.outlook.office.com") ||
        shExpMatch(host, "*.outlook.office365.com") ||
        shExpMatch(host, "*.cloud.microsoft") ||
        shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.microsoftonline.com") ||
        shExpMatch(host, "*.office.net") ||
        shExpMatch(host, "*.office365.com") ||
        shExpMatch(host, "*.officeapps.live.com") ||
        shExpMatch(host, "*.onecdn.static.microsoft") ||
        shExpMatch(host, "*.msocdn.com") ||
        shExpMatch(host, "*.sharepoint.com") ||
        shExpMatch(host, "*.sharepoint-df.com") ||
        shExpMatch(host, "*.onedrive.com") ||
        shExpMatch(host, "*.attachments.office.net") ||
        shExpMatch(host, "*.substrate.office.com")
    ) {
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:9999";
}
