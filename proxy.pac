function FindProxyForURL(url, host) {

    // Permitir impresora
    if (host == "10.10.20.10") {
        return "DIRECT";
    }

    // Permitir localhost e intranet simple
    if (isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "172.17.*") ||
        shExpMatch(host, "172.18.*") ||
        shExpMatch(host, "172.19.*") ||
        shExpMatch(host, "172.20.*") ||
        shExpMatch(host, "172.21.*") ||
        shExpMatch(host, "172.22.*") ||
        shExpMatch(host, "172.23.*") ||
        shExpMatch(host, "172.24.*") ||
        shExpMatch(host, "172.25.*") ||
        shExpMatch(host, "172.26.*") ||
        shExpMatch(host, "172.27.*") ||
        shExpMatch(host, "172.28.*") ||
        shExpMatch(host, "172.29.*") ||
        shExpMatch(host, "172.30.*") ||
        shExpMatch(host, "172.31.*")) {
        return "DIRECT";
    }

    // Permitir ecosistema Microsoft / Outlook / adjuntos / Office web
    if (
        shExpMatch(host, "*.microsoft.com") ||
        shExpMatch(host, "*.microsoftonline.com") ||
        shExpMatch(host, "*.microsoftonline-p.com") ||
        shExpMatch(host, "*.microsoft365.com") ||
        shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.office.net") ||
        shExpMatch(host, "*.office365.com") ||
        shExpMatch(host, "*.officeppe.net") ||
        shExpMatch(host, "*.outlook.com") ||
        shExpMatch(host, "*.outlook.office.com") ||
        shExpMatch(host, "*.outlook.office365.com") ||
        shExpMatch(host, "*.cloud.microsoft") ||
        shExpMatch(host, "*.live.com") ||
        shExpMatch(host, "*.live.net") ||
        shExpMatch(host, "*.msocdn.com") ||
        shExpMatch(host, "*.officeapps.live.com") ||
        shExpMatch(host, "*.officeapps.live.net") ||
        shExpMatch(host, "*.onecdn.static.microsoft") ||
        shExpMatch(host, "*.azureedge.net") ||
        shExpMatch(host, "*.sharepoint.com") ||
        shExpMatch(host, "*.sharepoint-df.com") ||
        shExpMatch(host, "*.sharepointonline.com") ||
        shExpMatch(host, "*.onedrive.com") ||
        shExpMatch(host, "*.onedrive.live.com") ||
        shExpMatch(host, "*.storage.live.com") ||
        shExpMatch(host, "*.attachments.office.net") ||
        shExpMatch(host, "*.substrate.office.com") ||
        shExpMatch(host, "*.officeclient.microsoft.com") ||
        shExpMatch(host, "*.usercontent.microsoft") ||
        shExpMatch(host, "*.teams.microsoft.com") ||
        shExpMatch(host, "*.skype.com") ||
        shExpMatch(host, "*.skypeforbusiness.com") ||
        shExpMatch(host, "*.windows.net") ||
        shExpMatch(host, "*.azure.com") ||
        shExpMatch(host, "*.azure.net") ||
        shExpMatch(host, "*.aadcdn.microsoftonline-p.com") ||
        shExpMatch(host, "*.msauth.net") ||
        shExpMatch(host, "*.msauthimages.net") ||
        shExpMatch(host, "*.msftauth.net") ||
        shExpMatch(host, "*.msftauthimages.net")
    ) {
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:9999";
}
