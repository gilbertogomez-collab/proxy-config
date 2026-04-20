function FindProxyForURL(url, host) {

    // Impresora
    if (host == "10.10.20.10") return "DIRECT";

    // SOLO Microsoft necesario
    if (
        host == "outlook.office.com" ||
        host == "outlook.cloud.microsoft" ||
        host == "login.microsoftonline.com" ||
        host == "onedrive.live.com" ||

        shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.office365.com") ||
        shExpMatch(host, "*.microsoftonline.com") ||
        shExpMatch(host, "*.officeapps.live.com") ||
        shExpMatch(host, "*.onecdn.static.microsoft") ||
        shExpMatch(host, "*.msocdn.com") ||
        shExpMatch(host, "*.sharepoint.com") ||
        shExpMatch(host, "*.attachments.office.net") ||
        shExpMatch(host, "*.1drv.ms")
    ) {
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:9999";
}
