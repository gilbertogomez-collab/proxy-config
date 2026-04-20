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

    // Microsoft + Outlook
    if (
        shExpMatch(host, "*.outlook.office.com") ||
        shExpMatch(host, "*.cloud.microsoft") ||
        shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.microsoftonline.com") ||
        shExpMatch(host, "*.sharepoint.com") ||
        shExpMatch(host, "*.onedrive.com")
    ) {
        return "DIRECT";
    }

    // Gmail + login + adjuntos
    if (
        host == "mail.google.com" ||
        host == "accounts.google.com" ||
        shExpMatch(host, "*.googleusercontent.com") ||
        shExpMatch(host, "*.gstatic.com") ||
        shExpMatch(host, "*.googleapis.com")
    ) {
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:9999";
}
