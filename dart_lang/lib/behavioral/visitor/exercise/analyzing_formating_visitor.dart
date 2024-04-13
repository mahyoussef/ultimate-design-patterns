import 'package:dart_lang/behavioral/visitor/exercise/document_management.dart';
import 'package:dart_lang/behavioral/visitor/exercise/document_management_visitor.dart';
import 'package:dart_lang/behavioral/visitor/exercise/presentation_file.dart';
import 'package:dart_lang/behavioral/visitor/exercise/spread_sheet_file.dart';
import 'package:dart_lang/behavioral/visitor/exercise/text_file.dart';

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
