import 'package:Strategy_design/behavioral/visitor/exercise/document_management.dart';
import 'package:Strategy_design/behavioral/visitor/exercise/document_management_visitor.dart';
import 'package:Strategy_design/behavioral/visitor/exercise/presentation_file.dart';
import 'package:Strategy_design/behavioral/visitor/exercise/spread_sheet_file.dart';
import 'package:Strategy_design/behavioral/visitor/exercise/text_file.dart';

class AnalysisFormating implements DocuemntManagement {
  @override
  void visitPresentation(PresenationFile file) {
    print('Analyzing presentation file');
  }

  @override
  void visitSpreadsheet(Spreadsheet file) {
    print('Analyzing spreadsheet file');
  }

  @override
  void visitTextFile(TextFile file) {
    print('Analyzing text file');
  }
}
