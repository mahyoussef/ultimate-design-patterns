class REquest {
  String type;
  bool isAuthenticated;
  bool isAuthorized;
  bool hasPassedSecurityChecks; 
  REquest(this.type, this.isAuthenticated, this.isAuthorized, this.hasPassedSecurityChecks);
}
