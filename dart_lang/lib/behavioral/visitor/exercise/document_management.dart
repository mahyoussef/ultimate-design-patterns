import 'package:dart_lang/behavioral/visitor/exercise/presentation_file.dart';
import 'package:dart_lang/behavioral/visitor/exercise/spread_sheet_file.dart';
import 'package:dart_lang/behavioral/visitor/exercise/text_file.dart';

abstract class DocuemntManagement {
  void visitTextFile(TextFile textFile);
  void visitSpreadsheet(Spreadsheet spreadsheet);
  void visitPresentation(PresenationFile presentation);
}
